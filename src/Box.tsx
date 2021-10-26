export interface NewBoxInterface {
  width: number;
  height: number;
  backgroundColor: string;
}

export interface BoxInterface extends NewBoxInterface{
  id: string;
}

export interface BoxPropsInterface extends BoxInterface{
  remove(id: string): void;
}

export interface CreatePropsInterface {
  createBox(newBox: BoxInterface): void;
}

/** Colored box presentation
 *
 * Props:
 * - id (unique)
 * - width
 * - height
 * - backgroundColor
 * - remove (function to call)
 *
 * BoxList -> Box
 */

function Box({ id, width = 5, height = 5, backgroundColor, remove }: BoxPropsInterface) {

  /** Remove a box. */
  function handleRemove(): void {
    remove(id);
  }

  return (
    <div className="Box">
      <div className="Box-box"
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor: backgroundColor
        }}
      />
      <button
        className="Box-removeBtn"
        onClick={handleRemove}>
        Remove The Box!
      </button>
    </div>
  );
}

export default Box;
