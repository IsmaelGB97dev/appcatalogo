export const CarritoItem = ({item, remove, sumar, restar}) => {
    return(
        <div className="row justify-content-center align-items-center border mt-3 p-2 shadow">
            <div className='col-3 text-center'>
                <img src={item.image} alt="foto" className='img-fluid' width={100} height={100}/>
            </div>
            <div className='col-5 text-center d-flex flex-column align-items-center justify-content-center'>
                <p>{item.title}</p>
                <h6 className='text-success'>$ {item.price}</h6>
            </div>
            <div className='col-2 text-center carrito-arrows'>
                <button onClick={()=>sumar(item.id)}><box-icon type='solid' name='up-arrow'></box-icon></button>
                <h5>{item.cantidad}</h5>
                <button onClick={()=>restar(item.id)}><box-icon type='solid' name='down-arrow'></box-icon></button>
            </div>
            <div className='col-1 text-center carrito-delete'>
                <p className='my-auto' onClick={()=>remove(item.id)}><box-icon name='trash' type='solid'></box-icon></p>
            </div>
        </div>
    );
}