type Props = {
    label: string;
    onClick: () => void;
}

const Button: React.FC<Props> = ({ label, onClick }) => {
      
      return (
        <button 
            className="py-2 px-6 bg-orange-700 text-white rounded-xl mt-10" 
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default Button