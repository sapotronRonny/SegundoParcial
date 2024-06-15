

export class CreateTestDto {

    private constructor(
      public readonly descripcion: string,
      public readonly indicaciones: string,
    ){}
  
  
    static create( props: {[key:string]: any} ): [string?, CreateTestDto?]  {
  
      const { descripcion, indicaciones } = props;
  
      if ( !descripcion ) return ['descripcion property is required', undefined];
      if ( !indicaciones ) return ['indicaciones property is required', undefined];
  
  
      return [undefined, new CreateTestDto(descripcion,indicaciones)];
    }
  
  
  }