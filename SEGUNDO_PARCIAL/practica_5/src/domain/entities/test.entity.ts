export class TestEntity {

    constructor(
      public id_exmane: number,
      public descripcion: string,
      public indicaciones: string,
    ) {}
  
    
  
    public static fromObject( object: {[key: string]: any} ): TestEntity {
      const { id_examen, descripcion, indicaciones } = object;
      if ( !id_examen ) throw 'Id is required';
      if ( !descripcion ) throw 'descripcion is required';
      if ( !indicaciones ) throw 'indicaciones is required';
  
      // let newNombre;
      // if ( nombre ) {
      //   newNombre = nombre.toUpperCase();
      //   if (  newNombre !== nombre  ) {
      //     throw 'Nombre must be uppercase'
      //   }
      // }
      return new TestEntity(id_examen, descripcion, indicaciones)

    }
  
  }