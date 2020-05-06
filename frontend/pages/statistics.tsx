const statistics = () => {
  return (
    <div className="statistic-wrapper">
      <div className="statistic-half-wrapper">
        <p className="statistic-paragraph">
          <b>Натуральные числа</b> <br /> Медиана <b>14</b> <br />
          Мода <b>8</b> <br />
          Объем <b>221</b> <br />
          Средний объем(строк на функцию) <b>20</b> <br />
          Количество вызовов других функций <b>19</b>
          <br />
        </p>
        <p className="statistic-paragraph">
          <b>Целые числа</b> <br />
          Медиана <b>8</b> <br />
          Мода <b>8</b> <br />
          Объем <b>63</b> <br />
          Средний объем(строк на функцию) <b>7</b> <br />
          Количество вызовов других функций <b>24</b>
        </p>
      </div>
      <div className="statistic-half-wrapper">
        <p className="statistic-paragraph">
          <b>Рациональные числа</b> <br />
          Медиана <b>19</b> <br />
          Мода <b>26</b> <br />
          Объем <b>177</b> <br />
          Средний объем(строк на функцию) <b>22</b> <br />
          Количество вызовов других функций <b>11</b>
        </p>
        <p className="statistic-paragraph">
          <b>Многочлены</b> <br />
          Медиана <b>19</b> <br />
          Мода <b>22</b> <br />
          Объем <b>176</b> <br />
          Средний объем(строк на функцию) <b>19</b> <br />
          Количество вызовов других функций <b>25</b>
        </p>
      </div>
    </div>
  );
};
export default statistics;
