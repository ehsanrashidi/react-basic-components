
export interface ImageProps{
    src:string,
    alt?:string,
    className?:string
}
const Image: React.FC<ImageProps> = (ImageProps) => <img className={ImageProps.className} src={ImageProps.src} alt={ImageProps.alt} />;

export default Image