import {buyCake,addCake} from '../redux/actions';
import {connect} from 'react-redux';
const CakeShop = (props) => {
    return <>
    <h1>Number of cakes - {props.numOfCakes}</h1>
    <button onClick={props.buyCake}>Buy a cake</button>
    <button onClick={props.addCake}>Add a cake</button>
    </>
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.noOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake()),
        addCake: () => dispatch(addCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeShop);