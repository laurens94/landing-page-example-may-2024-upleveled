import styles from './App.module.scss';
import { ReactComponent as LogoSvg } from './svg/logo.svg';
import { ReactComponent as FigmaSvg } from './svg/figma.svg';
import { ReactComponent as HeartSvg } from './svg/heart.svg';
import { ReactComponent as ArrowDownSvg } from './svg/arrow-down.svg';
import { ReactComponent as DiagramTextSvg } from './svg/diagram-text.svg';
import { ReactComponent as FigmaTextSvg } from './svg/figma-text.svg';
import { ReactComponent as SpellsSvg } from './svg/spells.svg';
import ButtonComponent from './components/Button.js';

export default function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.container}>
          <a href="/" className={styles.logo}>
            <LogoSvg />
            <h1>
              Magician <span>beta</span>
            </h1>
          </a>

          <nav className={styles.navigation}>
            <ul>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Install</a>
              </li>
              <li>
                <a href="/">Account</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className={styles.sectionPurple}>
          <div className={styles.container}>
            <hgroup>
              <h1>Every little thing it does is magic</h1>
              <p>A magical design tool for Figma powered by AI.</p>
            </hgroup>

            <ButtonComponent href="/" variant="fancy">
              <FigmaSvg /> Install on Figma
            </ButtonComponent>

            <picture className={styles.picture}>
              <img src="/img/magic-hero.jpg" alt="" />
            </picture>

            <div className={styles.flex}>
              <ButtonComponent href="/" variant="ghost">
                <HeartSvg /> 2.1k likes
              </ButtonComponent>

              <ButtonComponent href="/" variant="ghost">
                <ArrowDownSvg /> 53.3k installs
              </ButtonComponent>
            </div>

            <div className={styles.flex}>
              <p className={styles.madeby}>
                Made by
                <a href="/">
                  <DiagramTextSvg />
                </a>
              </p>
              <p className={styles.madeby}>
                Works with
                <a href="/">
                  <FigmaTextSvg />
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <hgroup>
            <h1>
              <SpellsSvg />
              Wave Your Magic Wand
            </h1>
            <p>
              Design with the power of AI to do everything from copywriting to
              generating unique icons from text.
            </p>
          </hgroup>

          <ul className={styles.tabs}>
            <li>
              <a href="#copywriting">Text to Icon</a>
            </li>
            <li>
              <a href="#copywriting">Copywriting</a>
            </li>
            <li>
              <a href="#text-to-image">Text to Image</a>
            </li>
          </ul>

          <picture className={styles.picture}>
            <img id="copywriting" src="/img/magic-copy-min.gif" alt="" />
            <img id="text-to-image" src="/img/magic-image-min.gif" alt="" />
          </picture>
        </section>
        <section></section>
        <section></section>
        <section></section>
      </main>
    </div>
  );
}
