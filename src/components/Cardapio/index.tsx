import Product from '../Product'
import {
  ButtonModal,
  Card,
  Container,
  Description,
  List,
  Modal,
  Pizzaimage
} from './styles'

import close from '../../assets/images/fechar.png'
import pizzamodal from '../../assets/images/pizzamodal.png'

const ProductsList = () => (
  <Container>
    <div className="container">
      <List>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </List>
      <Modal>
        <Card className="container">
          <header>
            <img src={close} alt="ícone de fechar" />
          </header>
          <Pizzaimage src={pizzamodal} alt="" />
          <Description>
            <h4>Pizza Marguerita</h4>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião. <br /> <br /> Serve: de 2 a 3 pessoas
            <ButtonModal>Adicionar ao carrinho - R$ 60,90</ButtonModal>
          </Description>
        </Card>
        <div className="overlay"></div>
      </Modal>
    </div>
  </Container>
)

export default ProductsList
