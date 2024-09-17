import ContainerLarge from "../global/ContainerLarge";

export default function Hero() {
  return (
    <div className="w-full bg-custom-blue-dark relative">
      <ContainerLarge diamonds className="flex flex-col h-[80vh] gap-1 justify-center">
        <h1 className="text-4xl font-medium text-white lg:text-6xl">Tingkatkan Skill IT Bersama </h1>
        <br />
        <h1 className="text-4xl font-bold text-white lg:text-6xl">Professional Industri</h1>
        
      </ContainerLarge>
    </div>
  );
}
