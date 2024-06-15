export class UpdateResultadoDto {

  private constructor(
    public readonly id: number,
    public readonly Resultado_test?: string,
    public readonly valor_paga?: number,

  ){}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.id) {
      returnObj.id = this.id;
    }

    if (this.Resultado_test) {
      returnObj.Resultado_test = this.Resultado_test;
    }

     if (this.valor_paga) {
      returnObj.valor_paga = this.valor_paga;
    }

    return returnObj;
  }


  static create( props: {[key:string]: any} ): [string?, UpdateResultadoDto?]  {

    const { id, Resultado_test, valor_paga } = props;
    let newResultado_test =Resultado_test;

    if ( !id || isNaN( Number(id)) ) {
      return ['El id debe ser valido'];
    }

    if ( Resultado_test ) {
      newResultado_test = Resultado_test.toUpperCase();
      if ( newResultado_test !== Resultado_test ) {
        return ['Se requiere mayusculas para descripcion'];
      }
    }

    if (valor_paga) {
      const civalorpagastr = String(valor_paga);
      const civalorRegex = /^\d+(\,\d+)?$/;

      if (!civalorRegex.test(civalorpagastr)) {
        return ['El valor paga debe tener solo números y puede contener una coma decimal'];
      }
    }

    return [undefined, new UpdateResultadoDto(id, Resultado_test,valor_paga)];
  }


}