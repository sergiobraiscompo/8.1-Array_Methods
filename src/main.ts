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
  const pacientesPediatria =  pacientes.filter((paciente) => paciente.especialidad === "Pediatra")
  return pacientesPediatria;
};

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
  const pacientesPediatriaMenores10 = pacientes.filter((paciente) => obtenPacientesAsignadosAPediatria(pacientes) && paciente.edad <= 10)
  return pacientesPediatriaMenores10;
};

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  const activarProctolo = pacientes.some((paciente) => paciente.temperatura > 39 && paciente.frecuenciaCardiaca > 100);
  return !activarProctolo;
};

const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
  const pacientesMedicoFamilia: Pacientes[] = pacientes.filter((paciente) => paciente.especialidad === "Medico de familia");
  console.log("Pacientes medico de familia:", pacientesMedicoFamilia)
  
  const pacientesReasignadosaMedicoDeFamilia = pacientesMedicoFamilia.concat(obtenPacientesAsignadosAPediatria(pacientes));

  return pacientesReasignadosaMedicoDeFamilia;
};

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  return pacientes.find((paciente) => paciente.especialidad === "Pediatra")
  ? false
  : true
};

interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
};
  
const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
  let contadorCardiologo: number = 0;
  let contadorMedicoFamilia: number = 0;
  let contadorPediatria: number = 0;

  pacientes.forEach((paciente) => {
    if (paciente.especialidad === "Cardiólogo") { 
      contadorCardiologo ++;
    }

    paciente.especialidad === "Medico de familia"
    ? contadorMedicoFamilia++
    : contadorPediatria++;
  });

  let listaPacientes: NumeroPacientesPorEspecialidad = {
    "medicoDeFamilia": contadorMedicoFamilia,
    "pediatria": contadorPediatria,
    "cardiologia": contadorCardiologo
  }

  return listaPacientes;
};


// Obtener listados
const pediatria_listado: Pacientes[] = obtenPacientesAsignadosAPediatria(pacientes);
const pediatria_menores_10_listado: Pacientes[] = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes); // Por alguna razón no me permite hacerlo desde el listado de pediatría
const pacientes_pediatria_a_medico_de_familia: Pacientes[] = reasignaPacientesAMedicoFamilia(pediatria_listado);

// Datos devueltos por consola
console.log("Pacientes pediatría", "\n", pediatria_listado);
console.log("Pacientes pediatría menores de 10 años", "\n", pediatria_menores_10_listado);
console.log("Activar protocolo de urgencia", activarProtocoloUrgencia(pacientes));
console.log("Pacientes reasignados a médico de familia", "\n", pacientes_pediatria_a_medico_de_familia);
console.log("El pediatra ha terminado: ", HayPacientesDePediatria(pediatria_listado));

// Contador de pacientes
console.log("Total pacientes médico de familia: " + cuentaPacientesPorEspecialidad(pacientes).medicoDeFamilia);
console.log("Total pacientes cardiología: " + cuentaPacientesPorEspecialidad(pacientes).cardiologia);
console.log("Total pacientes pediatría: " + cuentaPacientesPorEspecialidad(pacientes).pediatria);