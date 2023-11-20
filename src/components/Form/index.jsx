import ButtonForm from "../ButtonForm";
import Inputform from "../InputForm";

export default function Form() {
  return (
    <div className="absolute bg-[#f5f5f5] lg:w-[400px] h-[500px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-md border-2 border-gray-300 rounded-xl shadow-xl hover:shadow-2xl flex items-center justify-center">
      <form className=" flex flex-col w-[60%]">
        <h1 className="font-bold lg:text-[30px] text-center">Registro</h1>
        <Inputform placeholder={"Nombre"} imagen={"nombre.svg"} />
        <Inputform placeholder={"Apellido"} imagen={"apellido.svg"} />
        <Inputform placeholder={"Email"} type={"email"} imagen={"email.svg"} />
        <Inputform placeholder={"Teléfono"} imagen={"telefono.svg"} />
        <Inputform
          placeholder={"Contraseña"}
          type={"password"}
          imagen={"contraseña.svg"}
        />
        <Inputform
          placeholder={"Confirmar contraseña"}
          type={"password"}
          imagen={"check.svg"}
        />
        <ButtonForm />
      </form>
    </div>
  );
}
