import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addPerson ,changeNum} from './redux/phoneKatalog';

const PhoneKatalog = () =>{
    const dispatch = useDispatch();
    const [ name,setName ] =useState();
    const [ number,setNumber ] =useState();
    const { listNumber } = useSelector((state) => state.phoneNumber)


    const addphoneKatalog =()=>{
        dispatch(addPerson({name : name, number: number}))
        setName('');
        setNumber('');
    }
    const registerName = (e) =>{
        setName(e.target.value);
    }
    const registerNumber = (e) =>{
        setNumber(e.target.value);
        
    }
    
    return (
        <div>
            <h1>Phone Katalogen</h1>
            
            <input placeholder="Add Person Name" value={name} onChange={registerName}></input>
            <input placeholder="Add Number" value={number} onChange={registerNumber}></input>
            <button className="add-btn" onClick={addphoneKatalog}>Add</button>
            
            <ul className="catalog-box">
                {listNumber && listNumber.map((item,i)=>{
                    let number = item.number;
                    const changeNumber = () =>{
                        let num = number;
                        num = num.slice(1);
                        num = "+46" + num;
                        console.log(num)
                    } 
                    
                    return (
                        <li key={i}>
                            <h4>{item.name}</h4>
                            <p>Number : {number}</p>
                            <button onClick={changeNumber}>Global number</button>
                            {/* <p>{num}</p> */}
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
}
export default PhoneKatalog