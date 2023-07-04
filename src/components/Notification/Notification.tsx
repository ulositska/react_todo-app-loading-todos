import { useEffect } from 'react';

type Props = {
  error: string;
  setError: (error:string | null) => void;
};

export const Notification:React.FC<Props> = ({ error, setError }) => {
  const closeNotification = () => {
    setError(null);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      closeNotification();
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [error]);

  return (
    <div
      className="notification is-danger is-light has-text-weight-normal"
      hidden={!error}
    >
      {/*  eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        type="button"
        className="delete"
        onClick={closeNotification}
      />

      {error}
    </div>
  );
};
