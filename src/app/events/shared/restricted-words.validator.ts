import {FormControl} from '@angular/forms';

export function restrictedWords(words) {
  return (control: FormControl): { [key: string]: any } | null => {
    if (!words) {
      return null;
    }

    const invalidWords = words.filter(w => control.value.includes(w));
    return invalidWords && invalidWords.length > 0
      ? {restrictedWords: invalidWords.join(', ')}
      : null;
  };
}
