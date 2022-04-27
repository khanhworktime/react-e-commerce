
import './Catagories.scss';

export default function Catagories({categories}){
    return(
        <div className="catagories flex-wrap d-flex justify-content-around">
            {categories.map(function(tag,i){
                return (
                <a href="# " className="tag button border-only" id={`tag${i}`} key={i}>{tag}</a>
                )}
            )}
        </div>
    )
}