import ButtonForm from "../ButtonForm";
import GoogleLink from "../GoogleLink";
import Inputform from "../InputForm";

export default function Form() {
  return (
    <div className="absolute bg-[#f5f5f5] lg:w-[400px] h-[500px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-md border-2 border-gray-300 rounded-xl shadow-xl hover:shadow-2xl flex items-center justify-center">
      <form className=" flex flex-col">
        <h1>Registrarse</h1>
        <Inputform placeholder={"Nombre"} />
        <Inputform placeholder={"Apellido"} />
        <Inputform placeholder={"Email"} />
        <Inputform placeholder={"Teléfono"} />
        <Inputform placeholder={"Contraseña"} />
        <Inputform placeholder={"Confirmar contraseña"} />
        <ButtonForm />
        <GoogleLink />
      </form>
    </div>
  );
}
