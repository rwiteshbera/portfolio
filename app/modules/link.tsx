interface Props {
    to: string;
    name?: string;
    className?: string;
  }
  
  export default function Link({ to, name = to, className = "" }: Props) {
    return (
      <a 
        href={to} 
        className={className} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        {name}
      </a>
    );
  }
  