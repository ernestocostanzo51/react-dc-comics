

	
export default function AppCard(props) {
  return (
   <div key={props.id} className="col-2">
            <img src={props.thumb} className="img-fluid"></img>
            <p className="text-light mt-4">{props.title}</p>
          </div>
  );
}