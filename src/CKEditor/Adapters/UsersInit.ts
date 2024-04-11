import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import appData from '../../AppData/CkEditorData'


const {revisionHistoryData}=appData

class UsersInit {
    editor:ClassicEditor;
    constructor( editor: ClassicEditor ) {
        this.editor = editor;
    }

    static get pluginName() {
        return 'UsersInit';
    }

    static get requires() {
        return [ 'Users' ];
    }

    init() {
        const users = this.editor.plugins.get( 'Users' );

        users.addUser( revisionHistoryData.user );
        users.defineMe( revisionHistoryData.user.id );
    }
}



export default UsersInit;