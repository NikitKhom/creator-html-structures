import { PropTypes } from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

function CodeBlock({ width = 300, code, language, title, onCopy, isCopied}) {

    return (
        <div
        style={{width: width }}
        className='codeblock'>
            <h3 className='codeblock__title'>{title}</h3>
            <CopyToClipboard
            text={code}
            onCopy={onCopy}
            >
                <button className={`codeblock__copy-btn ${isCopied ? 'codeblock__copy-btn_copied': ''}`}></button>
            </CopyToClipboard>
            <SyntaxHighlighter
            className='codeblock__code'
            language={language}
            style={okaidia}>
                {code}
            </SyntaxHighlighter>
        </div>
    )
}

CodeBlock.propTypes = {
    width: PropTypes.number,
    code: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onCopy: PropTypes.func.isRequired,
    isCopied: PropTypes.bool.isRequired,
};

export default CodeBlock;