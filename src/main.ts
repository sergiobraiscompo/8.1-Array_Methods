import * as constantes from "./constantes";

const obtenPacientesAsignadosAPediatria = (pacientes: constantes.Pacientes[]): constantes.Pacientes[] => {
  const pacientesPediatria =  pacientes.filter((paciente) => paciente.especialidad === "Pediatra")
  return pacientesPediatria;
};

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: constantes.Pacientes[]): constantes.Pacientes[] => {
  const pacientesPediatriaMenores10 = pacientes.filter((paciente) => obtenPacientesAsignadosAPediatria(pacientes) && paciente.edad <= 10)
  return pacientesPediatriaMenores10;
};

const activarProtocoloUrgencia = (pacientes: constantes.Pacientes[]): boolean => {
  const pacienteConstantesAlteradas = (paciente: constantes.Pacientes): boolean => { return paciente.temperatura > 39 && paciente.frecuenciaCardiaca > 100};

  const activarProtocolo = Boolean(pacientes.find(pacienteConstantesAlteradas));

  return activarProtocolo;
};

const reasignaPacientesAMedicoFamilia = (pacientes: constantes.Pacientes[]): constantes.Pacientes[] => {
  const pacientesAReasignar = obtenPacientesAsignadosAPediatria(pacientes);

  pacientesAReasignar.forEach((pacienteAReasignar) =>{
    pacienteAReasignar.especialidad = "Medico de familia";
  })

  
  const pacientesMedicoFamilia: constantes.Pacientes[] = pacientes.filter((paciente) => paciente.especialidad === "Medico de familia");
  return pacientesMedicoFamilia;
};

const HayPacientesDePediatria = (): boolean => {
  const pacientesPediatria = obtenPacientesAsignadosAPediatria(constantes.pacientes)

  return pacientesPediatria.length > 0
  ? false
  : true
};

  
const cuentaPacientesPorEspecialidad = (pacientes: constantes.Pacientes[]): constantes.NumeroPacientesPorEspecialidad => {
  let contadorCardiologo: number = 0;
  let contadorMedicoFamilia: number = 0;
  let contadorPediatria: number = 0;

  pacientes.forEach((paciente) => {
    if (paciente.especialidad === "Cardiólogo") { 
      contadorCardiologo ++;
    } else {
      paciente.especialidad === "Medico de familia"
      ? contadorMedicoFamilia++
      : contadorPediatria++;
    }

  });

  let listaPacientes: constantes.NumeroPacientesPorEspecialidad = {
    "medicoDeFamilia": contadorMedicoFamilia,
    "pediatria": contadorPediatria,
    "cardiologia": contadorCardiologo
  }

  return listaPacientes;
};


// Obtener listados
const pediatria_listado: constantes.Pacientes[] = obtenPacientesAsignadosAPediatria(constantes.pacientes);
const pediatria_menores_10_listado: constantes.Pacientes[] = obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(constantes.pacientes);
const pacientes_pediatria_a_medico_de_familia: constantes.Pacientes[] = reasignaPacientesAMedicoFamilia(pediatria_listado);

// Datos devueltos por consola
console.log("Pacientes pediatría", "\n", pediatria_listado);
console.log("Pacientes pediatría menores de 10 años", "\n", pediatria_menores_10_listado);
console.log("Activar protocolo de urgencia", activarProtocoloUrgencia(constantes.pacientes));
console.log("Pacientes reasignados a médico de familia", "\n", pacientes_pediatria_a_medico_de_familia);
console.log("El pediatra ha terminado: ", HayPacientesDePediatria());

// Contador de pacientes
console.log("Total pacientes médico de familia: " + cuentaPacientesPorEspecialidad(constantes.pacientes).medicoDeFamilia);
console.log("Total pacientes cardiología: " + cuentaPacientesPorEspecialidad(constantes.pacientes).cardiologia);
console.log("Total pacientes pediatría: " + cuentaPacientesPorEspecialidad(constantes.pacientes).pediatria);