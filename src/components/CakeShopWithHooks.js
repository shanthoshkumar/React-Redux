import {buyCake,addCake} from '../redux/actions';
import {useSelector,useDispatch} from 'react-redux';

const CakeShopWithHooks = (props) => {
    const numOfCakes = useSelector(state => state.noOfCakes);
    const dispatch = useDispatch()
    return <>
    <h1>Number of cakes - {numOfCakes}</h1>
    <button onClick={() => dispatch(buyCake())}>Buy a cake</button>
    <button onClick={() => dispatch(addCake())}>Add a cake</button>
    </>
}

export default CakeShopWithHooks;