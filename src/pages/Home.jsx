import { useState } from "react"
import { ButtonDefault } from "../components/ButtonDefault"
import { util } from "../util/util"
import desktop from "../assets/images/desktop-and-mobile.png"
// import grafismo from "../assets/images/grafismo.png"
import dynaPredict from "../assets/images/logo-dynapredict.png"
import sensorAs from "../assets/images/sensor-as.png"
import sensorHf from "../assets/images/sensor-hf.png"
import sensorTca from "../assets/images/sensor-tca.png"


const Home = () => {

    const [formData, setFormData] = useState({})
    const [inputClass, setInputClass] = useState({})

    const validForm = () => {
        let validation = true

        if (!formData.name) {
            validation = false
            setInputClass((prev) => ({ ...prev, name: "danger" }))
        }
        if (!formData.company) {
            validation = false
            setInputClass((prev) => ({ ...prev, company: "danger" }))
        }
        if (!util.validEmail(formData.email)) {
            validation = false
            setInputClass((prev) => ({ ...prev, email: "danger" }))
        }
        if (!formData.phone || formData.phone.length < 14) {
            validation = false
            setInputClass((prev) => ({ ...prev, phone: "danger" }))
        }

        return validation
    }

    const sendData = () => {
        if (validForm()) {
            alert(`Nome: ${formData.name}
                \nEmpresa: ${formData.company}
                \nEmail: ${formData.email}
                \nTelefone: ${formData.phone}`)
            setFormData({})
        }
    }

    return (
        <>
            <main>


                {/* Introduction Section */}

                <section className="introduction" id="introduction">
                    <div className="introduction-content container">
                        <div className="info">
                            <h1>
                                Solução <br/>
                                DynaPredict
                            </h1>
                            <img className="logo" src={dynaPredict} alt="Logo DynaPredict" />
                        </div>
                        <div className="image-block">
                            <img src={desktop} alt="Desktop" />
                        </div>
                    </div>
                </section>


                {/* Sensors Section */}

                <section className="sensors" id="sensors">
                    <div className="sensors-content container">
                        <h2>Sensores para Manutenção Preditiva</h2>
                        <p>
                            Opções de sensores sem fio, ou DynaLoggers com sensores de vibração triaxial e
                            temperatura embarcados, que comunicam por Bluetooth com o App mobile ou Gateway,
                            registrando os dados monitorados em sua memória interna. Por conexão internet esses dados
                            são centralizados na Plataforma DynaPredict Web para análise, prognóstico e tomada de decisão.
                        </p>
                        <ButtonDefault link="https://dynamox.net/dynapredict/" classStyle="btn-primary">Ver mais</ButtonDefault>
                        <div className="sensors-block">
                            <div className="sensors-item">
                                <img src={sensorTca} alt="TcA" />
                                <h3>TcA+</h3>
                            </div>
                            <div className="sensors-item">
                                <img src={sensorAs} alt="AS" />
                                <h3>AS</h3>
                            </div>
                            <div className="sensors-item">
                                <img src={sensorHf} alt="HF" />
                                <h3>HF</h3>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Contact Section */}

                <section className="contact" id="contact">
                    <div className="contact-content container">
                        <h2>
                            Ficou com dúvida? <br />
                            Nós entramos em contato com você
                        </h2>
                        <form className="contact-form">
                            <input
                                type="text"
                                className={["contact-input", inputClass.name].join(" ")}
                                value={formData.name || ""}
                                onChange={(ev) => {
                                    setFormData((prev) => ({ ...prev, name: ev.target.value }))
                                    setInputClass((prev) => ({ ...prev, name: "" }))
                                    console.log(formData)
                                }}
                                placeholder="Como gostaria de ser chamado?"
                            />
                            <input
                                type="text"
                                className={["contact-input", inputClass.company].join(" ")}
                                value={formData.company || ""}
                                onChange={(ev) => {
                                    setFormData((prev) => ({ ...prev, company: ev.target.value }))
                                    setInputClass((prev) => ({ ...prev, company: "" }))
                                }}
                                placeholder="Em qual empresa você trabalha?"
                            />
                            <input
                                type="text"
                                className={["contact-input", inputClass.email].join(" ")}
                                value={formData.email || ""}
                                onChange={(ev) => {
                                    setFormData((prev) => ({ ...prev, email: ev.target.value }))
                                    setInputClass((prev) => ({ ...prev, email: "" }))
                                }}
                                placeholder="Digite aqui o seu email"
                            />
                            <input
                                type="text"
                                className={["contact-input", inputClass.phone].join(" ")}
                                value={formData.phone || ""}
                                onChange={(ev) => {
                                    setFormData((prev) => ({ ...prev, phone: util.maskPhone(ev.target.value) }))
                                    setInputClass((prev) => ({ ...prev, phone: "" }))
                                }}
                                placeholder="Qual o seu telefone?"
                            />
                            <ButtonDefault classStyle="btn-secondary" onclick={sendData}>Enviar</ButtonDefault>
                        </form>
                    </div>
                </section>

            </main>
        </>
    )
}

export default Home