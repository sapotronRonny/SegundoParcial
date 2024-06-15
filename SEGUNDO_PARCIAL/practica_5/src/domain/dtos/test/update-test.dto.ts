export class UpdateTestDto {

  private constructor(
    public readonly id_examen: number,
    public readonly descripcion?: string,
    public readonly indicaciones?: string,

  ){}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.id_examen) {
      returnObj.id_examen = this.id_examen;
    }

    if (this.descripcion) {
      returnObj.descripcion = this.descripcion;
    }

    if (this.indicaciones) {
      returnObj.indicaciones = this.indicaciones;
    }

    return returnObj;
  }


  static create( props: {[key:string]: any} ): [string?, UpdateTestDto?]  {

    const { id_examen,descripcion, indicaciones } = props;
    // let newNombre =nombre;

    if ( !id_examen || isNaN( Number(id_examen)) ) {
      return ['El id debe ser valido'];
    }

    if ( !descripcion || isNaN( Number(descripcion)) ) {
      return ['El descripcion debe ser valido'];
    }

    if ( !indicaciones || isNaN( Number(indicaciones)) ) {
      return ['El indicaciones debe ser valido'];
    }

    // if ( nombre ) {
    //   newNombre =  nombre.toUpperCase();
    //   if ( newNombre !== nombre ) {
    //     return ['Se requiere mayusculas para descripcion'];
    //   }
    // }

    // if (descripcion) {
    //   const ciPacienteStr = String(CI_paciente);
    //   const ciPacienteRegex = /^\d{9}$/;

    //   if (!ciPacienteRegex.test(ciPacienteStr)) {
    //     return ['La cédula debe tener solo números y exactamente nueve dígitos'];
    //   }
    // }

    return [undefined, new UpdateTestDto(id_examen, descripcion, indicaciones)];
  }


}