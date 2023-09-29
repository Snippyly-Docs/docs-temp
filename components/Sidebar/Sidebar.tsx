import { Heading, Meta, MetaJsonFile, PageMapItem, PageOpts } from 'nextra';
import { useState, useContext, useLayoutEffect, useRef } from 'react';
import GlobalContext from '../globalContext';
import CaretIcon from '../CaretIcon/CaretIcon';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  pageOpts: PageOpts;
}

interface CustomPageMeta {
  hidden?: boolean;
  title?: string;
  firstHeader?: string;
}

interface CustomHeading extends Heading {
  id: string;
}

export default function Sidebar(props: SidebarProps) {

  const { pageMap, headings, route } = props.pageOpts;
  const { setActiveHeader, activeHeader } = useContext(GlobalContext);
  
  let meta = pageMap.find((item) => (item.kind === 'Meta')) as MetaJsonFile;
  const metaKeyArr = Object.keys(meta.data);

  const sidebarItems = pageMap.filter((item) => item.kind !== 'Meta').sort((a, b) => {
    // @ts-ignore
    const aIdx = metaKeyArr.findIndex((key) => (key === a.name));
    // @ts-ignore
    const bIdx = metaKeyArr.findIndex((key) => (key === b.name));
    return aIdx < bIdx ? 1 : -1;
  });

  const [folderOpenStates, setFolderOpenStates] = useState(() => {
    const initialStates = {};

    const setDefault = (item) => {
      initialStates[item.name] = route.includes(item.name) || route === item.route || item.kind === 'Folder';
      if (item.children) {
        item.children.forEach(setDefault);
      }
    }
    sidebarItems.forEach((item) => {
      if (item.kind === 'Folder' || item.kind === 'MdxPage') {
        setDefault(item);
      }
    });
    return initialStates;
  });

  const handleToggleFolder = (name: string, evt: any) => {
    evt.preventDefault();
    setFolderOpenStates((prevState) => {
      return {
        ...prevState,
        [name]: !prevState[name],
      };
    });
  }

  const renderHeadings = (customMeta: CustomPageMeta) => {

    return headings.map((heading, idx) => {

      let data = heading as CustomHeading;
      if (idx === 0 && customMeta.firstHeader) {
        data.value = customMeta.firstHeader;
      }

      if (data.depth > 1) return null;

      return (
        <li key={data.value} className={styles.listItem}>
          <a className={`${styles.header} ${activeHeader === data.id || !activeHeader && idx === 0 ? styles.active : ''}`} href={`#${data.id}`} onClick={() => {
            setActiveHeader(data.id);
          }}>{data.value}</a>
        </li>
      );
    });
  }

  const renderChildren = (children: Array<PageMapItem>, meta: { [key: string]: Meta }) => {
    return children.sort((a, b) => {

      if (a.kind === 'MdxPage' && b.kind === 'MdxPage') {
        const keys = Object.keys(meta);
        return keys.findIndex((key) => (key === a.name)) < keys.findIndex((key) => (key === b.name)) ? -1 : 1;
      }
      return -1;

    }).map((child) => {
      if (child.kind === 'MdxPage') {

        const customMeta = meta[child.name] as CustomPageMeta;
        if (customMeta?.hidden) return null;

        return (
          <li key={child.route} className={styles.listItem}>
            {child.route === route ?
              <details open={folderOpenStates[child.name]}>
                <summary onClick={($event) => handleToggleFolder(child.name, $event)} className={styles.summary}>
                  <CaretIcon open={folderOpenStates[child.name]} />
                  {customMeta && customMeta.title ? customMeta.title : child.name}
                </summary>
                <ul className={`${styles.list} ${styles.headingList}`}>{renderHeadings(customMeta)}</ul>
              </details> :
              <a className={styles.pageLink} href={child.route}>
                <CaretIcon open={false} />{customMeta && customMeta.title ? customMeta.title : child.name}</a>
            }
          </li>
        );
      } else if (child.kind === 'Folder') {

        const _meta = child.children.find((item) => item.kind === 'Meta') as MetaJsonFile;
        const customMeta = meta[child.name] as CustomPageMeta;

        return (
          <li key={child.route} className={`${styles.listItem} ${styles.folder}`}>
            <details open={folderOpenStates[child.name]}>
              <summary onClick={($event) => handleToggleFolder(child.name, $event)} className={styles.summary}>
                <CaretIcon open={folderOpenStates[child.name]} />
                {customMeta && customMeta.title ? customMeta.title : child.name}
              </summary>
              <ul className={styles.list}>{renderChildren(child.children, _meta.data)}</ul>
            </details>
          </li>
        );
      }
      return null;
    });
  }
  return <ul className={`${styles.list} ${styles.sidebar}`}>{renderChildren(sidebarItems, meta.data)}</ul>;
}