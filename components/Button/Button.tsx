import styles from '../../styles/Button.module.css';

interface ButtonProps {
  text: string;
  onClick: () => void;
  isSelected: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, isSelected }) => {
  const buttonClassName = isSelected ? `${styles.langButton} ${styles.selected}` : styles.langButton;
  
  return (
    <button className={buttonClassName} onClick={onClick}>
      {text}
    </button>
  );
};


interface ButtonProps {
  text: string;
  onClick: () => void;
  isSelected: boolean;
}
