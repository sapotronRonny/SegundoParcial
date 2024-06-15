export class ResultadoEntity {

  constructor(
    public id: number,
    public Resultado: string,
    public valor_paga: number,
    public observciones: string,
  ) {}

  

  public static fromObject( object: {[key: string]: any} ): ResultadoEntity {
    const { id, Resultado, valor_paga, observaciones } = object;
    if ( !id ) throw 'Id is required';
    if ( !Resultado ) throw 'resultado is required';
    if ( !valor_paga ) throw 'valor_paga is required';
    if ( !observaciones ) throw 'observaciones is required';

    // let newNombre;
    // if ( nombre ) {
    //   newNombre = nombre.toUpperCase();
    //   if (  newNombre !== nombre  ) {
    //     throw 'Nombre must be uppercase'
    //   }
    // }

    
    // const ciPacienteRegex = /^\d{1,10}$/;
  
    // if (!ciPacienteRegex.test(CI_paciente)) {
    //   throw 'Cedula must be numeric and have a maximum of 10 digits';
    // }


    return new ResultadoEntity(id, Resultado, valor_paga, observaciones)

  }

}

  
  
  