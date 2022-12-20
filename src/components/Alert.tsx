type Alert = {
  msg: string;
  setAlertErro: (value: boolean) => void;
}

export default function AlertApp(props: Alert) {
  return (
    <div
      className="
        alert 
        alert-warning 
        alert-dismissible 
        fade 
        show
      "
      role="alert"
    >
      {props.msg}
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={() => props.setAlertErro(false)}
      />
    </div>
  );

}