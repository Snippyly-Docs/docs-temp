import React, { useRef, useEffect, useState } from 'react';
import AceEditor from 'react-ace';
import styles from './CodeSample.module.scss';
import CaretIcon from '../../CaretIcon/CaretIcon';

import 'brace/mode/javascript';
import 'brace/mode/html';
import 'brace/mode/jsx';
import 'brace/mode/css';
import 'brace/theme/tomorrow_night_blue';

export interface CodeSampleProps {
  code: string;
  scrollToLine?: number;
  highlightRanges?: Array<[number, number]>;
  mode: string;
  preview?: React.ReactNode;
}

export default function CodeSample(props: CodeSampleProps) {
  const editorRef = useRef(null);
  const markerIdRefs = useRef([]);

  const [previewOpen, setPreviewOpen] = useState(true);

  const setPadding = (editor) => {
    editor.renderer.setPadding(32, 32, 32, 32);
  };

  const setHeight = (editor) => {
    const lineHeight = editor.renderer.lineHeight;
    const totalLines = editor.session.getLength();
    const height = lineHeight * totalLines + (2 * lineHeight);
    editor.container.style.height = `${height}px`;
    editor.resize();
  };

  const handleEditorLoad = (editor) => {
    setPadding(editor);
    setHeight(editor);
  };

  useEffect(() => {
    if (editorRef.current && props.scrollToLine >= 0) {
      const editor = editorRef.current.editor;
      editor.scrollToLine(props.scrollToLine, true, true, () => {});
      editor.gotoLine(props.scrollToLine + 1, 0, true);
      editor.focus();
    }
  }, [props.scrollToLine]);

  useEffect(() => {
    if (editorRef.current) {

      if (props.highlightRanges === undefined) return;

      const editor = editorRef.current.editor;
      const session = editor.getSession();
      
      if (markerIdRefs.current.length > 0) {
        markerIdRefs.current.forEach(markerIdRef => {
          session.removeMarker(markerIdRef);
        });
        markerIdRefs.current = [];
      }

      props.highlightRanges.forEach((highlightRange) => {
        const [startRow, endRow] = highlightRange;
        const _markerId = session.addMarker(
          // @ts-ignore
          new window.ace.Range(startRow, 0, endRow, Infinity),
          'aceSelectedWord',
          'fullLine'
        );

        markerIdRefs.current = [...markerIdRefs.current, _markerId];

      });
    }
  }, [props.highlightRanges]);

  return (
    <>
      { props.preview ? 
        <div className={styles.previewContainer}>
          <div className={styles.previewToggle} onClick={() => setPreviewOpen(!previewOpen)}>
            <CaretIcon open={previewOpen} />
            Preview
          </div>
          { previewOpen ?
            <div className={styles.previewContent}>
              { props.preview }
            </div>
          : undefined }
        </div>
        : null 
      }
      <AceEditor
        ref={editorRef}
        mode={props.mode}
        className={`${props.preview ? styles.noTopBorder : ''} ${styles.aceEditor}`}
        theme="tomorrow_night_blue"
        highlightActiveLine={false}
        value={props.code}
        readOnly
        onLoad={handleEditorLoad}
        showPrintMargin={false}
        showGutter={false}
        wrapEnabled
        setOptions={{
          useWorker: false
        }}
        width="100%"
      />
    </>
  );
}