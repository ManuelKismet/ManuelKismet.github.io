function submitemail(){
  var txt = new ActiveXObject("Scripting.FileSystemObject");
                var s = txt.CreateTextFile("11.txt", true);
                s.WriteLine('Hello');
                s.Close();
}
