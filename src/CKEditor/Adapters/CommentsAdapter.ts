// @ts-nocheck
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import appData from '../../Appdata'

// import axios from "axios";
const {appData1} = appData

class CommentsAdapter {
    editor: ClassicEditor;
    constructor( editor:ClassicEditor ) {
        this.editor = editor;
    }
 
    static get requires() {
        return [ 'CommentsRepository' ];
    }
 
    init() {
        // console.log('editor', this.editor);
        const usersPlugin = this.editor.plugins.get( 'Users' );
        const editorId = this.editor.sourceElement?.id;
        const editorVal = this.editor.getData();
        const editorVal1=this.editor.data.get();
        // console.log(editorId);
        const commentsRepositoryPlugin = this.editor.plugins.get( 'CommentsRepository' );
        // appData1.commentThreads = JSON.parse(localStorage.getItem("commentsThreadData"));
        appData1.initialData = `<h2>
        <comment-start name="thread-1"></comment-start>
        Bilingual Personality Disorder
        <comment-end name="thread-1"></comment-end>
    </h2>
    <p>
        This may be the first time you hear about this made-up disorder but it actually isn’t so far from the truth.
        As recent studies show, the language you speak has more effects on you than you realize.
        According to the studies, the language a person speaks affects their cognition,
        behavior, emotions and hence <strong>their personality</strong>.
    </p>
    <p>
        This shouldn’t come as a surprise
        <a href="https://en.wikipedia.org/wiki/Lateralization_of_brain_function">since we already know</a>
        that different regions of the brain become more active depending on the activity.
        The structure, information and especially <strong>the culture</strong> of languages varies substantially
        and the language a person speaks is an essential element of daily life.
    </p>`
        // commentsRepositoryPlugin.activeCommentThread = JSON.parse(localStorage.getItem("commentsThreadData"))
        // console.error('commentsRepositoryPlugin', commentsRepositoryPlugin)
        // Load the users data.
        for ( const user of appData1.users ) {
            usersPlugin.addUser( user );
        }
 
        // Set the current user.
        // usersPlugin.defineMe( appData1.userId );
        // for ( const commentThread of localStorage.getItem("commentThreadsData") ) {
        //     commentsRepositoryPlugin.addCommentThread( commentThread );
        // }
        // Set the adapter on the `CommentsRepository#adapter` property.
        commentsRepositoryPlugin.adapter = {
            addComment( data: any ) {
                console.error( 'Comment added------------>', data );
                
                // Write a request to your database here. The returned `Promise`
                // should be resolved when the request has finished.
                // When the promise resolves with the comment data object, it
                // will update the editor comment using the provided data.
                return Promise.resolve( {
                    createdAt: new Date()       // Should be set on the server side.
                } );
            },
 
            updateComment( data: any ) {
                console.error( 'Comment updated', data );
 
                // Write a request to your database here. The returned `Promise`
                // should be resolved when the request has finished.
                return Promise.resolve();
            },
 
            removeComment( data: any ) {
                console.error( 'Comment removed', data );
 
                // Write a request to your database here. The returned `Promise`
                // should be resolved when the request has finished.
                return Promise.resolve();
            },
 
           async addCommentThread( data: { threadId: any; comments: any[]; content: any; } ) {
            // const domEditableElement = document.querySelectorAll(
            //     '.ck-editor__editable'
            //   )
            //   console.log(domEditableElement.length)
            //   domEditableElement.forEach((p)=>{console.log(p)})
              // Get the editor instance from the editable element.
            //   const editorInstance = domEditableElement.ckeditorInstance
            //   console.log(editorInstance.getData())
                var url = window.location.href;
                var parts = url.split('/');
//                 console.error('url----->' , url.split('/'));
 
//     var obj1 = {
//         research_summary: `<p><span class="ck-comment-marker" data-comment="ec40f3c5008b919fd73d7b014fcb9d217">TestCKEditor</span></p>`,
//       }
// var resultId = await axios({
//   method: "PUT",
//   "url": import.meta.env.VITE_API_URL + '/radars/' + parts[4],
//   data: obj1,
//       headers: {
//           Accept: 'application/json',
//       }
     
// });          
 
                const commentThreadsData = commentsRepositoryPlugin.getCommentThreads( {
                    skipNotAttached: true,
                    skipEmpty: true,
                    toJSON: true
                } );
                // commentThreadsData.
                // var obj1 = {editorId, };
                // obj1.editorId = editorId
                // obj1.comments = commentThreadsData
               
                // commentThreadsData.map(v => Object.assign(v, {editorId: editorId}))
                // Object.assign(commentThreadsData, {editorId: editorId}, {radarId: parts[4]})
                //@ts-ignore
                console.log(commentThreadsData)
                
                
                // localStorage.setItem('commentsThreadData', JSON.stringify(commentThreadsData));
                // Write a  request to your database here. The returned `Promise`
                // should be resolved when the request has finished.
               
                return Promise.resolve( {
                    threadId: data.threadId,
                    comments: data.comments.map( ( comment ) => ( { commentId: comment.commentId, createdAt: new Date() } ) ) // Should be set on the server side.
                } );
 
            },
 
            getCommentThread( data: { threadId: any; } ) {
                const commentThreadsData = commentsRepositoryPlugin.getCommentThreads( {
                    skipNotAttached: true,
                    skipEmpty: true,
                    toJSON: true
                } );
                console.log('getcommentThreadsData------------>', commentThreadsData)
                // console.error('test----------------->', JSON.parse(localStorage.getItem("commentsThreadData")));
                // console.error( 'Getting comment thread', data );
 
                // Write a request to your database here. The returned `Promise`
                // should resolve with the comment thread data.
                var d1 = localStorage.getItem("commentsThreadData");
                return Promise.resolve( {
                    d1
                } );
            },
 
            updateCommentThread( data: any ) {
                console.error( 'Comment thread updated', data );
 
                // Write a request to your database here. The returned `Promise`
                // should be resolved when the request has finished.
                return Promise.resolve();
            },
 
            resolveCommentThread( data: any ) {
                console.error( 'Comment thread resolved', data );
                console.log(editorData.value.research_summary) 
                // Write a request to your database here. The returned `Promise`
                // should be resolved when the request has finished.
                return Promise.resolve( {
                    resolvedAt: new Date(), // Should be set on the server side.
                    resolvedBy: usersPlugin.me.id // Should be set on the server side.
                } );
            },
 
            reopenCommentThread( data: any ) {
                console.error( 'Comment thread reopened', data );
 
                // Write a request to your database here. The returned `Promise`
                // should be resolved when the request has finished.
                return Promise.resolve();
            },
 
            removeCommentThread( data: any ) {
                console.error( 'Comment thread removed', data );
 
                // Write a request to your database here. The returned `Promise`
                // should be resolved when the request has finished.
                return Promise.resolve();
            }
 
        };
    }
}
 
export default CommentsAdapter;