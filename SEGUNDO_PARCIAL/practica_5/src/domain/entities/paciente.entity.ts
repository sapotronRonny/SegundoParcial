export class PacienteEntity {

    constructor(
      public id_paciente: number,
      public nombre: string,
      public CI_paciente: number,
    ) {}
  
    
  
    public static fromObject( object: {[key: string]: any} ): PacienteEntity {
      const { id_paciente, nombre, CI_paciente } = object;
      if ( !id_paciente ) throw 'Id is required';
      if ( !nombre ) throw 'nombre is required';
      if ( !CI_paciente ) throw 'cedula is required';
  
      let newNombre;
      if ( nombre ) {
        newNombre = nombre.toUpperCase();
        if (  newNombre !== nombre  ) {
          throw 'Nombre must be uppercase'
        }
      }

      
      const ciPacienteRegex = /^\d{1,10}$/;
    
      if (!ciPacienteRegex.test(CI_paciente)) {
        throw 'Cedula must be numeric and have a maximum of 10 digits';
      }


      return new PacienteEntity(id_paciente, nombre, CI_paciente)

    }
  
  }
  
  
  