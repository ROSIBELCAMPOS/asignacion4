import avatar from '../assets/UserPerfil.png'

function MenuLateral() {
    return (  

        <div>

            <div className='lateral'>
                <div >
                    <img src={avatar} className='avatar' />

                    <h3 className='menuLink'>Admin</h3>

                    <div className='menuLink'>
                        <h4>Dashboard</h4>
                    </div>
                    <div>
                        <a className='menuLink'> Estudiante</a>
                    </div>
                    <div>
                        <a className='menuLink'>Profesores</a>
                    </div>
                    <div>
                        <a className='menuLink'>Asignatura</a>
                    </div>
                </div>

                

               

            </div>
            
        </div>
    );
}

export default MenuLateral;