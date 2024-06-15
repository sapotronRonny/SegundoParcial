

export class CreatePacienteDto {

  private constructor(
    public readonly nombre: string,
    public readonly CI_paciente: number,

  ){}


  static create( props: {[key:string]: any} ): [string?, CreatePacienteDto?]  {

    const { nombre, CI_paciente } = props;

    if ( !nombre ) return ['Nombre property is required', undefined];
    if ( !CI_paciente ) return ['Cedula property is required', undefined];

    return [undefined, new CreatePacienteDto(nombre, CI_paciente)];
  }


}