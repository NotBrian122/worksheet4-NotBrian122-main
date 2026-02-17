import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {input,output} from '@angular/core';
import { signal } from '@angular/core';
@Component({
  selector: 'app-add-note',
  imports: [FormsModule],
  templateUrl: './add-note.html',
  styleUrls: ['./add-note.css'],
})
export class AddNote {
  MovieNumber = input<number>(0);
  Note = input<string>('');

  newNote = output<string>();

  protected AddNoteVisable = signal(false);

  protected currentNote : string = '';

  protected submit(){
    this.newNote.emit(this.currentNote);
    this.AddNoteVisable.set(false);

  }
  protected update(){
    // prefill the input with the passed-in note when opening the editor
    this.currentNote = this.Note();
    this.AddNoteVisable.set(true);
  }
}
