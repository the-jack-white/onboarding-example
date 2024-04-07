type ProgressBarProps = {
  showBackButton: boolean;
  backButtonCallback: () => void;
};

export const ProgressBar = ({
  showBackButton,
  backButtonCallback,
}: ProgressBarProps) => {
  return (
    <section className="progress-bar">
      {showBackButton && (
        <button className="back-button" onClick={backButtonCallback}>
          BACK
        </button>
      )}
      <div>Lets go</div>
    </section>
  );
};
