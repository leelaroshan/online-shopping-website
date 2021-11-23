import React,{ useEffect}from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import {setProducts} from '../redux/actions/productActiions'
import Product from "./Product";


const ProductList = () => {
    const products = useSelector(state => state);
    const dispatch = useDispatch();

 const fetchProducts = async()=>{
 const response =  await axios
           .get('https://fakestoreapi.com/products')
           .catch((err)=>{ 
               console.log("ERr", err)
             }) 
            //  console.log(response.data)
         dispatch(setProducts(response.data))
        }
  useEffect(() => {
      fetchProducts()
  }, [])
  console.log("Products", products);

    return(
        <div className="ui grid container">
            
            <Product />
        </div>
    )

}

export default ProductList;