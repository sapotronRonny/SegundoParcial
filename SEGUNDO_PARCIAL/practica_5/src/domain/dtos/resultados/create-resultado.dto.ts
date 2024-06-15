export class CreateResultadoDto {

    private constructor(
      public readonly resultado_test: string,
      public readonly valor_paga: number,
      public readonly observaciones: string,
    ){}
  
  
    static create( props: {[key:string]: any} ): [string?, CreateResultadoDto?]  {
  
      const { resultado_test,valor_paga,observaciones } = props;
  
      if ( !resultado_test ) return ['Resultado del examen es requerido', undefined];
      if ( !valor_paga ) return ['Valor de paga del examen es requerido', undefined];
      if ( !observaciones ) return ['Observacion del examen es requerido', undefined];
  
  
      return [undefined, new CreateResultadoDto(resultado_test,valor_paga,observaciones)];
    }
  
  
  }