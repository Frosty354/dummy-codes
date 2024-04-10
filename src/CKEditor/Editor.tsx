// App.jsx / App.tsx

import React, { Component, useEffect, useState } from 'react';
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
import Context from '@ckeditor/ckeditor5-core/src/context';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import {Autoformat} from "@ckeditor/ckeditor5-autoformat";
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import List from '@ckeditor/ckeditor5-list/src/list';
import ListProperties from '@ckeditor/ckeditor5-list/src/listproperties';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PictureEditing from '@ckeditor/ckeditor5-image/src/pictureediting';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableColumnResize from '@ckeditor/ckeditor5-table/src/tablecolumnresize';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextPartLanguage from '@ckeditor/ckeditor5-language/src/textpartlanguage';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Comments from '@ckeditor/ckeditor5-comments/src/comments';
import CommentsOnly from '@ckeditor/ckeditor5-comments/src/commentsonly'
import UsersInit from './Adapters/UsersInit';
import RevisionHistoryAdapter from './Adapters/RevisionHistoryAdapter';
import CommentsAdapter from './Adapters/CommentsAdapter';
import { RevisionHistory, RevisionTracker, RevisionsRepository } from '@ckeditor/ckeditor5-revision-history';
import { TrackChanges } from '@ckeditor/ckeditor5-track-changes';

type editorProp={
    editorId:string
}

const Editor = ({editorId}:editorProp)=>{
    const [editorConfiguration,setEditorConfiguration]=useState({});
    const configuration={
        id:editorId,
        plugins: [Autoformat, BlockQuote, Bold, Heading,
             Indent, Italic, Link, List, MediaEmbed,
            Paragraph, Table, TableToolbar, Alignment, AutoLink, Code, CodeBlock, Essentials, FindAndReplace, Font, Highlight, HorizontalLine,
            HtmlEmbed, 
            // ImageInsert, ImageResize, ImageUpload, Image,LinkImage, ImageStyle, ImageToolbar, ImageCaption,
            IndentBlock,
             ListProperties, PageBreak,
            PictureEditing, RemoveFormat, SpecialCharacters,
            SpecialCharactersEssentials, Strikethrough, Subscript, Superscript,
            TableCaption, TableCellProperties, TableColumnResize, TableProperties,Comments,CommentsOnly,
            TextPartLanguage, TextTransformation, TodoList, Underline,TrackChanges ,
            RevisionHistory,
            RevisionTracker,RevisionsRepository
        ],
        extraPlugins: [ UsersInit, 
            RevisionHistoryAdapter,
            CommentsAdapter ],
        toolbar: {
        items: [
        'undo', 'redo',
        '|',
         'findAndReplace', 'selectAll',
        '|',
        'heading',
        '|', 'bold', 'italic', 'strikethrough', 'underline', 'code', 'subscript', 'superscript',
        '|',
        'specialCharacters', 'horizontalLine', 'pageBreak',
        '|',
        'highlight', 'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
        '|',
        'link', 'blockQuote', 'insertTable', 'codeBlock', 'htmlEmbed',
        '|',
        'bulletedList', 'numberedList', 'todoList',
        '|',
        'outdent', 'indent', 'alignment',
        '|',
        'textPartLanguage',
        '|','comment', 
        'trackChanges', 
        'revisionHistory',
        
        ],
        shouldNotGroupWhenFull: true
        },
        comments: {
            editorConfig: {
                
                // Combine mentions + Webhooks to notify users about new comments
                // https://ckeditor.com/docs/cs/latest/guides/webhooks/events.html
                extraPlugins: [ Bold, Italic, List, ],
                mention: {
                    feeds: [
                        {
                            marker: '@',
                            feed: [
                                '@Baby Doe', '@Joe Doe', '@Jane Doe', '@Jane Roe', '@Richard Roe'
                            ],
                            minimumCharacters: 1
                        }
                    ]
                },
            }
        },
        licenseKey: 'ODVoSG15aVkvamhYN1pyWUhWQW1xb0Yzdm10eTgxd3pFMFpoRU5LVXh6ZXgxOGFKVUIybGdFM25Pa00xLU1qQXlOREEwTURNPQ==',
        sidebar: {
            container: document.querySelector( `#sidebar-${editorId}` )
        },
        revisionHistory: {
            editorContainer: document.querySelector( `#editor-container-${editorId}` ),
            viewerContainer: document.querySelector( `#revision-viewer-container-${editorId}` ),
            viewerEditorElement: document.querySelector( `#revision-viewer-editor-${editorId}` ),
            viewerSidebarContainer: document.querySelector( `#revision-viewer-sidebar-${editorId}` )
        },
        fontFamily: {
            supportAllValues: true
        },
        fontSize: {
            options: [ 10, 12, 14, 'default', 18, 20, 22 ],
            supportAllValues: true
        },
        htmlEmbed: {
            showPreviews: true
        },
        image: {
            styles: [
                'alignCenter',
                'alignLeft',
                'alignRight'
            ],
            resizeOptions: [
                {
                    name: 'resizeImage:original',
                    label: 'Original',
                    value: null
                },
                {
                    name: 'resizeImage:50',
                    label: '50%',
                    value: '50'
                },
                {
                    name: 'resizeImage:75',
                    label: '75%',
                    value: '75'
                }],
            toolbar: [
                'imageTextAlternative', 'toggleImageCaption', '|',
                'imageStyle:inline', 'imageStyle:wrapText', 'imageStyle:breakText', 'imageStyle:side', '|',
                'resizeImage'
            ],
            insert: {
                type: 'auto',
                integrations: [ 'upload', 'assetManager', 'url' ]
            }
        },
        list: {
            properties: {
                styles: true,
                startIndex: true,
                reversed: true
            }
        },
        link: {
            decorators: {
                addTargetToExternalLinks: true,
                defaultProtocol: 'https://',
                toggleDownloadable: {
                    mode: 'manual',
                    label: 'Downloadable',
                    attributes: {
                        download: 'file'
                    }
                }
            }
        },
        placeholder: 'Type or paste your content here!',
        table: {
            contentToolbar: [
                'tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties', 'toggleTableCaption'
            ]
        },
    
    
    }
   useEffect(()=>{
    setEditorConfiguration(configuration)
    return(()=>{
        
    })
   },[])
    return <div >
    <h2>{editorId}</h2>
    <div id={`editor-container-${editorId}`}>
        <CKEditor
            id={editorId}
            editor={ ClassicEditor }
            config={ editorConfiguration }
            data="<p>Hello from CKEditor&nbsp;5!</p>"
            onReady={ editor => {
                // You can store the "editor" and use when it is needed.
                
                console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event ) => {
                console.log( event );
            } }
            onBlur={ ( event, editor ) => {
                console.log( 'Blur.', editor );
            } }
            onFocus={ ( event, editor ) => {
                console.log( 'Focus.', editor );
            } }
        />
        <div className="sidebar-container" id={`sidebar-${editorId}`}></div>
    </div>

    <div id={`revision-viewer-container-${editorId}`}>
        <div className="editor-container">
            <div id={`revision-viewer-editor-${editorId}`}></div>
            <div className="sidebar-container" id={`revision-viewer-sidebar-${editorId}`}></div>
        </div>
    </div>
</div>
}

export default Editor;
