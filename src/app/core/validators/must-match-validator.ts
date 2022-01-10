import { AbstractControl, ValidatorFn } from '@angular/forms';

export class MustMatchValidator {
  /**
   * Définition du validateur de dates
   * @param initialField original field
   * @param confirmField confirmation field
   * @param validatorField Fonction de validation à retourner
   */
  public static areEqual(
      initialField: string,
      confirmField: string,
      validatorField: { [key: string]: boolean }): ValidatorFn
  {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
        const initialValue = c.get(initialField)?.value;
        const confirmValue = c.get(confirmField)?.value;
        if ((initialValue !== null && confirmValue !== null) && initialValue !== confirmValue) {
            return validatorField;
        }
        return null;
    };
  }
}
