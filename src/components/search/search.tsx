import {ReactComponent as IconSearch} from 'assets/icon-search.svg';
import { Button } from 'components/button';

import styles from './search.module.scss';

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

type FormFields = {
  username: HTMLInputElement
}

export const Search = ({ onSubmit, hasError }: SearchProps) => {
 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement & FormFields>) => {
    e.preventDefault();
    const text = e.currentTarget.username.value;

    if(text.trim()) {
      onSubmit(text);
      e.currentTarget.reset();
    }
  }

  return(
    <form onSubmit={handleSubmit}  autoComplete='off'>
      <div className={styles.search}>
     
      <label htmlFor='search' className={styles.label}>
        <IconSearch/>
      </label>
      <input
        type='text'
        className={styles.textField}
        id = 'search'
        name = 'username'
        placeholder='Search gitHub name...'
      />
        {hasError && (
          <div className={styles.error}>No result</div>
        )}
        <Button>Search</Button>
      </div>
    </form>
  );
}

