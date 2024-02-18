export default function Spinner() {
  return (
    <div className="loading_screen d-flex flex-column justify-content-center h-100 w-100">
      <div className="d-flex flex-row mx-auto">
        Loading...
        <div className="spinner-border "> </div>
      </div>
    </div>
  );
}
