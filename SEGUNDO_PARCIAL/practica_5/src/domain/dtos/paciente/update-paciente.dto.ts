export class UpdatePacienteDto {

  private constructor(
    public readonly id_paciente: number,
    public readonly nombre?: string,
    public readonly CI_paciente?: number,

  ){}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.nombre) {
      returnObj.nombre = this.nombre;
    }

    if (this.CI_paciente) {
      returnObj.CI_paciente = this.CI_paciente;
    }

    return returnObj;
  }


  static create( props: {[key:string]: any} ): [string?, UpdatePacienteDto?]  {

    const { id_paciente, nombre, CI_paciente } = props;
    let newNombre =nombre;

    if ( !id_paciente || isNaN( Number(id_paciente)) ) {
      return ['El id debe ser valido'];
    }

    if ( nombre ) {
      newNombre =  nombre.toUpperCase();
      if ( newNombre !== nombre ) {
        return ['Se requiere mayusculas para descripcion'];
      }
    }

    if (CI_paciente) {
      const ciPacienteStr = String(CI_paciente);
      const ciPacienteRegex = /^\d{9}$/;

      if (!ciPacienteRegex.test(ciPacienteStr)) {
        return ['La cédula debe tener solo números y exactamente nueve dígitos'];
      }
    }

    return [undefined, new UpdatePacienteDto(id_paciente, nombre, CI_paciente)];
  }


}