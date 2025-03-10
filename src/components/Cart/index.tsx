import { useDispatch, useSelector } from 'react-redux'

import {
  Buttons,
  CartContainer,
  CartItem,
  ContainerConfirmation,
  InputGroup,
  Overlay,
  Prices,
  Row,
  Sidebar,
  Title
} from './styles'
import { close, remove, clear } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import Button from '../Button'

import { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import InputMask from 'react-input-mask'

import { usePurchaseMutation } from '../../services/api'
import { ButtonContainer } from '../../components/Button/styles'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const [step, setStep] = useState('cart')

  const continuarEntrega = () => setStep('delivery')
  const voltarCarrinho = () => setStep('cart')

  const continuarPagamento = () => setStep('payment')
  const VoltarEntrega = () => setStep('delivery')

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const checkoutForm = () => {
    dispatch(close())
    navigate('/')
    window.location.reload()
  }

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      if (valorAtual.preco) {
        return (acumulador += valorAtual.preco)
      }
      return 0
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const [purchase, { data, isLoading, isSuccess }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      receiver: '',
      adress: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome  precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      adress: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      zipCode: Yup.string().required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),

      cardDisplayName: Yup.string()
        .min(5, 'O nome no cartão deve ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'O número do cartão deve ter 16 dígitos')
        .max(19, 'O número do cartão deve ter 16 dígitos')
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .min(3, 'O código de segurança deve ter 3 dígitos')
        .max(3, 'O código de segurança deve ter 3 dígitos')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(2, 'O mês de vencimento deve ter 2 dígitos')
        .max(2, 'O mês de vencimento deve ter 2 dígitos')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(2, 'O ano de vencimento deve ter 2 dígitos')
        .max(2, 'O ano de vencimento deve ter 2 dígitos')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      // console.log(values)
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.adress,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        // products: [
        //   {
        //     id: 1,
        //     price: 10
        //   }
        // ]
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  console.log(form)

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }
  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {isSuccess && data ? (
          <ContainerConfirmation>
            <h3>Pedido realizado - {data.orderId} </h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.{' '}
              <br /> <br />
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras. <br /> <br />
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição. <br /> <br />
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite! <br /> <br />
            </p>
            <Button
              onClick={checkoutForm}
              type="button"
              title="Clique aqui para continuar com a entrega"
            >
              Concluir
            </Button>
          </ContainerConfirmation>
        ) : (
          <form onSubmit={form.handleSubmit}>
            {step === 'cart' && (
              <>
                {items.length > 0 ? (
                  <>
                    <ul>
                      {items.map((item) => (
                        <CartItem key={item.id}>
                          <img src={item.foto} />
                          <div>
                            <h3>{item.nome}</h3>
                            <span>{formataPreco(item.preco)}</span>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            type="button"
                          />
                        </CartItem>
                      ))}
                    </ul>
                    <Prices>
                      <p>Valor Total</p>{' '}
                      <span>{formataPreco(getTotalPrice())}</span>
                    </Prices>
                    <Button
                      onClick={continuarEntrega}
                      type="button"
                      title="Clique aqui para continuar com a entrega"
                    >
                      Continuar com a entrega
                    </Button>
                  </>
                ) : (
                  <p className="empty-text">
                    O carrinho está vazio, adicione pelo menos um produto para
                    continuar com a compra.
                  </p>
                )}
              </>
            )}
            {step === 'delivery' && (
              <>
                <Title>Entrega</Title>
                <InputGroup>
                  <label htmlFor="receiver">Quem irá receber</label>
                  <input
                    className={checkInputHasError('receiver') ? 'error' : ''}
                    type="text"
                    id="receiver"
                    name="receiver"
                    value={form.values.receiver}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    required
                    title="Por favor, informe o nome de quem irá receber"
                  />
                  <small>
                    {getErrorMessage('receiver', form.errors.receiver)}
                  </small>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="adress">Endereço</label>
                  <input
                    className={checkInputHasError('adress') ? 'error' : ''}
                    type="text"
                    id="adress"
                    name="adress"
                    value={form.values.adress}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('adress', form.errors.adress)}</small>
                </InputGroup>
                <InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    className={checkInputHasError('city') ? 'error' : ''}
                    type="text"
                    id="city"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('city', form.errors.city)}</small>
                </InputGroup>
                <Row>
                  <InputGroup>
                    <label htmlFor="zipCode">CEP</label>
                    <InputMask
                      className={checkInputHasError('zipCode') ? 'error' : ''}
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={form.values.zipCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="99.999-999"
                    />
                    <small>
                      {getErrorMessage('zipCode', form.errors.zipCode)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="number">Número</label>
                    <input
                      className={checkInputHasError('number') ? 'error' : ''}
                      type="text"
                      id="number"
                      name="number"
                      value={form.values.number}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('number', form.errors.number)}
                    </small>
                  </InputGroup>
                </Row>
                <InputGroup>
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input
                    className={checkInputHasError('complement') ? 'error' : ''}
                    type="text"
                    id="complement"
                    name="complement"
                    value={form.values.complement}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('complement', form.errors.complement)}
                  </small>
                </InputGroup>
                <Buttons>
                  <ButtonContainer
                    type="button"
                    onClick={continuarPagamento}
                    title="Clique aqui para continuar o pagamento"
                  >
                    Continuar com o pagamento
                  </ButtonContainer>
                  <ButtonContainer
                    type="button"
                    onClick={voltarCarrinho}
                    title="Clique aqui para voltar para o carrinho"
                  >
                    Voltar para o carrinho
                  </ButtonContainer>
                </Buttons>
              </>
            )}

            {step === 'payment' && (
              <div>
                <Title>
                  Pagamento - Valor a pagar {formataPreco(getTotalPrice())}
                </Title>
                <InputGroup>
                  <label htmlFor="cardDisplayName">Nome no cartão</label>
                  <input
                    className={
                      checkInputHasError('cardDisplayName') ? 'error' : ''
                    }
                    type="text"
                    id="cardDisplayName"
                    name="cardDisplayName"
                    value={form.values.cardDisplayName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage(
                      'cardDisplayName',
                      form.errors.cardDisplayName
                    )}
                  </small>
                </InputGroup>
                <Row>
                  <InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      className={
                        checkInputHasError('cardNumber') ? 'error' : ''
                      }
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="9999 9999 9999 9999"
                    />
                    <small>
                      {getErrorMessage('cardNumber', form.errors.cardNumber)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardCode">CVV</label>
                    <InputMask
                      className={checkInputHasError('cardCode') ? 'error' : ''}
                      type="text"
                      id="cardCode"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="999"
                    />
                    <small>
                      {getErrorMessage('cardCode', form.errors.cardCode)}
                    </small>
                  </InputGroup>
                </Row>
                <Row>
                  <InputGroup>
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <InputMask
                      className={
                        checkInputHasError('expiresMonth') ? 'error' : ''
                      }
                      type="text"
                      id="expiresMonth"
                      name="expiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="99"
                    />
                    <small>
                      {getErrorMessage(
                        'expiresMonth',
                        form.errors.expiresMonth
                      )}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <InputMask
                      className={
                        checkInputHasError('expiresYear') ? 'error' : ''
                      }
                      type="text"
                      id="expiresYear"
                      name="expiresYear"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="99"
                    />
                    <small>
                      {getErrorMessage('expiresYear', form.errors.expiresYear)}
                    </small>
                  </InputGroup>
                </Row>
                <Buttons>
                  <ButtonContainer
                    type="submit"
                    onClick={() => form.handleSubmit()}
                    title="Clique aqui para finalizar a compra"
                    disabled={isLoading}
                  >
                    {isLoading
                      ? 'Finalizando pagamento...'
                      : 'Finalizar pagamento'}
                  </ButtonContainer>
                  <ButtonContainer type="button" onClick={VoltarEntrega}>
                    Voltar para a edição de endereço
                  </ButtonContainer>
                </Buttons>
              </div>
            )}
          </form>
        )}
      </Sidebar>
    </CartContainer>
  )
}
export default Cart
