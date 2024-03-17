type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
  return pacientes.filter((paciente) => paciente.especialidad === "Pediatra")
};

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
  return pacientes.filter((paciente) => paciente.especialidad === "Pediatra" && paciente.edad <= 10)
};

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;
  pacientes.find((paciente) => paciente.temperatura > 39 && paciente.frecuenciaCardiaca > 100)
  return activarProctolo;
};

const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
  pacientes.push((paciente) => paciente.especialidad === "Pediatra")
};

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let quedanPacientes = false;

  return pacientes.find((paciente) => paciente.especialidad === "Pediatra")
  ? true
  : false
};

interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
};
  
const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
  let listaPacientes = 0;
  let contadorCardiologo: number = 0;
  let contadorMedicoFamilia: number = 0;
  let contadorPediatria: number = 0;

  pacientes.forEach = () => {
      
      if (paciente.especialidad === "Cardiólogo") { 
          contadorCardiologo ++;
      }
  
      paciente.especialidad === "Medico"
      ? contadorMedicoFamilia
      : contadorPediatria
      
      listaPacientes.push = [
          contadorMedicoFamilia,
          contadorPediatria,
          contadorCardiologo,
      ]
  }

  return listaPacientes;


};