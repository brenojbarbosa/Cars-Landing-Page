

function Contact() {
  return (
    <div className="container my-5">
        <h2 className="text-center">Fale Conosco</h2>
        <form className="mt-4">
            <div className="mb-3">
                <label className="form-label">Nome</label>
                <input className="form-control" type="text" placeholder="Seu nome"/>

            </div>

            <div className="mb-3">
                <label className="form-label">E-mail</label>
                <input type="email" className="form-control" placeholder="Seu email"/>

            </div>
            <button className="btn btn-primary">Enviar</button>

        </form>
      
    </div>
  )
}

export default Contact
