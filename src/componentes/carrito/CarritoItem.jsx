import FotoPrueba from '../../images/logo.png';

export const CarritoItem = () => {
    return(
        <div className="row justify-content-center align-items-center border mt-3 p-2 shadow">
            <div className='col-3 text-center'>
                <img src={FotoPrueba} alt="foto" className='img-fluid' width={100} height={100}/>
            </div>
            <div className='col-5 text-center d-flex flex-column align-items-center justify-content-center'>
                <p>Nombre de producto es bastante</p>
                <h6 className='text-success'>$ 2,000</h6>
            </div>
            <div className='col-2 text-center carrito-arrows'>
                <span><box-icon type='solid' name='up-arrow'></box-icon></span>
                <h5>2</h5>
                <span><box-icon type='solid' name='down-arrow'></box-icon></span>
            </div>
            <div className='col-1 text-center carrito-delete'>
                <p className='my-auto'><box-icon name='trash' type='solid' ></box-icon></p>
            </div>
        </div>
    );
}