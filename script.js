const htmlCode = document.getElementById('htmlCode');
const cssCode = document.getElementById('cssCode');
const jsCode = document.getElementById('jsCode');
const outputFrame = document.getElementById('output');
const checkCodeButton = document.getElementById('checkCodeButton');
const lessonNumber = document.getElementById('lesson-number');
const lessonTitle = document.getElementById('lesson-title');
const lessonInstruction = document.getElementById('lesson-instruction');
const lessonExplanation = document.getElementById('lesson-explanation');
const lessonExample = document.getElementById('lesson-example');

const lessons = [

    



    {
        title: "Write a Heading",
        explanation: `
        <p>HTML is used to structure web content. Headings help organize content, and <code>&lt;h1&gt;</code> is the largest heading tag.</p>
        <p>Example:</p>
        <pre>&lt;h1&gt;This is an Example Heading&lt;/h1&gt;</pre>
        <p>This creates a big heading on the page.</p>
      `,
        example: "&lt;h1&gt;This is an Example Heading&lt;/h1&gt;",
        instruction: "Write an <code>&lt;h1&gt;</code> element with the text \"Hello, World!\".",
        check: () => /<h1>\s*Hello, World!\s*<\/h1>/i.test(htmlCode.value)
    },
    {
        title: "Add a Paragraph",
        explanation: `
        <p>The <code>&lt;p&gt;</code> tag defines a paragraph of text.</p>
        <p>Example:</p>
        <pre>&lt;p&gt;This is a paragraph.&lt;/p&gt;</pre>
        <p>Paragraphs are used for blocks of text under headings.</p>
      `,
        example: "&lt;p&gt;This is a paragraph.&lt;/p&gt;",
        instruction: "Add a <code>&lt;p&gt;</code> element with the text \"This is my first paragraph.\" below your heading.",
        check: () => /<p>\s*This is my first paragraph.\s*<\/p>/i.test(htmlCode.value)
    },
    {
        title: "Style the Heading",
        explanation: `
        <p>CSS styles HTML elements. To change text color, use the <code>color</code> property inside a CSS rule.</p>
        <p>Example:</p>
        <pre>
  h1 {
    color: green;
  }
        </pre>
        <p>This makes all <code>&lt;h1&gt;</code> elements green.</p>
      `,
        example: "h1 {\n  color: green;\n}",
        instruction: "Make your <code>&lt;h1&gt;</code> text red using CSS.",
        check: () => /h1\s*{[^}]*color\s*:\s*red;?[^}]*}/i.test(cssCode.value)
    },
    {
        title: "Center the Paragraph",
        explanation: `
        <p>You can center text using the <code>text-align</code> property.</p>
        <p>Example:</p>
        <pre>
  p {
    text-align: center;
  }
        </pre>
        <p>This centers all paragraph text.</p>
      `,
        example: "p {\n  text-align: center;\n}",
        instruction: "Center your <code>&lt;p&gt;</code> text using CSS.",
        check: () => /p\s*{[^}]*text-align\s*:\s*center;?[^}]*}/i.test(cssCode.value)
    },
    {
        title: "Add JavaScript Interaction",
        explanation: `
        <p>JavaScript adds interactivity. You can detect clicks with <code>addEventListener</code> and show messages using <code>alert</code>.</p>
        <pre>
  <span class="keyword">document</span>.<span class="method">querySelector</span>(<span class="string">'h1'</span>)
    .<span class="method">addEventListener</span>(<span class="string">'click'</span>, <span class="keyword">function</span>() {
      <span class="method">alert</span>(<span class="string">'Heading clicked!'</span>);
    });
        </pre>
        <h4>🔍 Code Breakdown:</h4>
        <ul>
          <li><span class="keyword">document</span>: Accesses the web page.</li>
          <li><span class="method">querySelector</span>: Finds the <code>&lt;h1&gt;</code> element.</li>
          <li><span class="method">addEventListener</span>: Listens for a <span class="string">'click'</span> event.</li>
          <li><span class="method">alert</span>: Shows a popup message.</li>
        </ul>
      `,
        example: `
  document.querySelector('h1').addEventListener('click', function() {
    alert('Heading clicked!');
  });
      `,
        instruction: "Write JavaScript to show an alert with the message <code>'Hello from JavaScript!'</code> when the <code>&lt;h1&gt;</code> is clicked.",
        check: () => /(document\.querySelector\(['"]h1['"]\)\.addEventListener\(['"]click['"]\s*,\s*function\s*\(\)\s*{\s*alert\(['"]Hello from JavaScript!['"]\);?\s*}\s*\))/i.test(jsCode.value)
    },
    {
        title: "Change Text with JavaScript",
        explanation: `
        <p>You can change text using JavaScript by modifying the <code>textContent</code> property.</p>
        <pre>
  document.querySelector('p').textContent = 'New text!';
        </pre>
        <p>This changes the paragraph text to "New text!".</p>
      `,
        example: "document.querySelector('p').textContent = 'New text!';",
        instruction: "Change your paragraph text to <code>'JavaScript changed this text!'</code> using JavaScript.",
        check: () => /document\.querySelector\(['"]p['"]\)\.textContent\s*=\s*['"]JavaScript changed this text!['"];/i.test(jsCode.value)
    },
    {
        title: "Create a Button and Handle Clicks",
        explanation: `
        <p>Let's add a button and make it do something when clicked!</p>
        <pre>
  &lt;button&gt;Click Me&lt;/button&gt;
  
  document.querySelector('button').addEventListener('click', function() {
    alert('Button clicked!');
  });
        </pre>
        <ul>
          <li><code>&lt;button&gt;</code>: Creates a clickable button.</li>
          <li><code>document.querySelector('button')</code>: Finds the button element.</li>
          <li><code>addEventListener('click')</code>: Runs code when clicked.</li>
        </ul>
      `,
        example: `
  <button>Click Me</button>
  document.querySelector('button').addEventListener('click', function() {
    alert('Button clicked!');
  });
      `,
        instruction: "Add a <code>&lt;button&gt;</code> with the text 'Click Me' and show an alert when it's clicked.",
        check: () =>
            /<button>\s*Click Me\s*<\/button>/i.test(htmlCode.value) &&
            /document\.querySelector\(['"]button['"]\)\.addEventListener\(['"]click['"]\s*,\s*function\s*\(\)\s*{\s*alert\(['"]Button clicked!['"]\);?\s*}\s*\)/i.test(jsCode.value)
    },
    {
        title: "Use Variables in JavaScript",
        explanation: `
          <p>Variables store information that you can use later in your code. Think of a variable as a labeled box where you can store data.</p>
          
          <h4>🚀 Steps to Create and Use a Variable:</h4>
          <ol>
            <li>Use <code>let</code> to create a variable.</li>
            <li>Give your variable a name (e.g., <code>userName</code>).</li>
            <li>Assign a value (your name) to the variable using <code>=</code>.</li>
            <li>Use <code>alert()</code> to show a message with your variable.</li>
          </ol>
      
          <h4>🔍 Example Code:</h4>
          <pre>
      let userName = 'Alice';  // Step 1: Create a variable and assign your name
      alert('Hello, ' + userName + '!');  // Step 2: Show a greeting message
          </pre>
      
          <h4>💡 Explanation:</h4>
          <ul>
            <li><code>let userName = 'Alice';</code>: 
              - <span class="keyword">let</span>: Keyword to declare a variable.  
              - <span class="variable">userName</span>: The name of your variable.  
              - <span class="operator">=</span>: Assigns the value.  
              - <span class="string">'Alice'</span>: The value (your name).</li>
            <li><code>alert('Hello, ' + userName + '!');</code>:  
              - <span class="method">alert()</span>: Shows a popup message.  
              - <span class="operator">'Hello, ' + userName + '!'</span>: Combines text with the variable's value.  
              - Result: <strong>Hello, Alice!</strong></li>
          </ul>
      
          <h4>✅ Correct Example:</h4>
          <pre>
      let userName = 'John';
      alert('Hello, ' + userName + '!');
          </pre>
      
          <h4>⚠️ Common Mistakes:</h4>
          <ul>
            <li><code>let userName = John;</code> ❌ (Missing quotes around name)</li>
            <li><code>alert('Hello, userName!');</code> ❌ (Should use the variable without quotes)</li>
            <li><code>userName = 'John';</code> ❌ (Needs <code>let</code> when declaring for the first time)</li>
          </ul>
        `,
        example: `
      let userName = 'Alice';
      alert('Hello, ' + userName + '!');
        `,
        instruction: `
          Create a variable called <code>userName</code> with your name and use <code>alert()</code> to show the message:  
          <strong>Hello, [your name]!</strong>
        `,
        correction: `
          <strong>Correction:</strong> Make sure you use this structure:
          <pre>
      let userName = 'YourName';
      alert('Hello, ' + userName + '!');
          </pre>
          🔔 Don't forget the quotes around your name and the plus signs (+) to combine text!
        `,
        check: () => {
            const code = jsCode.value.trim();

            // Flexible regex to accept variations like single/double quotes, spacing, and correct variable usage
            const regex = /let\s+userName\s*=\s*['"][\w\s]+['"]\s*;\s*alert\s*\(\s*['"]Hello,\s*['"]\s*\+\s*userName\s*\+\s*['"]!['"]\s*\)\s*;?/i;

            return regex.test(code);
        }
    },

    {
        title: "Change the Color of a Subheading on Click",
        explanation: `
          <p>In this lesson, you'll learn how to create a function in JavaScript that changes the color of an <code>&lt;h2&gt;</code> element when you click it!</p>
      
          <h4>🚀 Steps to Achieve This:</h4>
          <ol>
            <li>Create a function called <code>changeColor</code>.</li>
            <li>Inside the function, select the <code>&lt;h2&gt;</code> element using <code>document.querySelector()</code>.</li>
            <li>Use the <code>style.color</code> property to change its color.</li>
            <li>Add a click event to the <code>&lt;h2&gt;</code> that triggers the function.</li>
          </ol>
      
          <h4>🔍 Example Code:</h4>
          <pre>
      <h2>Click me to change my color!</h2>
      
      function changeColor() {
        document.querySelector('h2').style.color = 'blue';  // Changes h2 color to blue
      }
      
      document.querySelector('h2').addEventListener('click', changeColor);  // Calls the function on click
          </pre>
      
          <h4>💡 Explanation:</h4>
          <ul>
            <li><code>function changeColor() { ... }</code>: Defines a function named <code>changeColor</code>.</li>
            <li><code>document.querySelector('h2')</code>: Selects the first <code>&lt;h2&gt;</code> element.</li>
            <li><code>.style.color = 'blue';</code>: Changes the text color of the <code>&lt;h2&gt;</code> to blue.</li>
            <li><code>addEventListener('click', changeColor)</code>: Listens for a click on the <code>&lt;h2&gt;</code> and runs <code>changeColor</code> when clicked.</li>
          </ul>
      
          <h4>✅ Correct Solution Example:</h4>
          <pre>
      <h2>Click me!</h2>
      
      function changeColor() {
        document.querySelector('h2').style.color = 'green';
      }
      
      document.querySelector('h2').addEventListener('click', changeColor);
          </pre>
      
          <h4>⚠️ Common Mistakes:</h4>
          <ul>
            <li>Forgetting to select the <code>&lt;h2&gt;</code>: <code>document.querySelector('h2')</code> is required.</li>
            <li>Not adding the event listener, so clicking does nothing.</li>
            <li>Misspelling <code>addEventListener</code> (no typos allowed!).</li>
            <li>Using <code>style.color = blue;</code> without quotes around the color name.</li>
          </ul>
        `,
        example: `
      <h2>Click me to change my color!</h2>
      
      function changeColor() {
        document.querySelector('h2').style.color = 'blue';
      }
      
      document.querySelector('h2').addEventListener('click', changeColor);
        `,
        instruction: `
          Create a function named <code>changeColor</code> that changes the color of the <code>&lt;h2&gt;</code> to <strong>green</strong> when it's clicked.
        `,
        correction: `
          <strong>Correction:</strong> Make sure your code looks like this:
          <pre>
      <h2>Click me!</h2>
      
      function changeColor() {
        document.querySelector('h2').style.color = 'green';
      }
      
      document.querySelector('h2').addEventListener('click', changeColor);
          </pre>
          🔔 Remember:
          - Use quotes around the color name: <code>'green'</code>.  
          - Add the event listener so the function runs when you click the <code>&lt;h2&gt;</code>.
        `,
        check: () => {
            const html = htmlCode.value.trim();
            const js = jsCode.value.trim();

            const h2Exists = /<h2>.*<\/h2>/i.test(html);  // Checks if <h2> exists
            const functionExists = /function\s+changeColor\s*\(\)\s*{[^}]*}/i.test(js);  // Checks if function changeColor is defined
            const colorChange = /\.querySelector\(['"]h2['"]\)\.style\.color\s*=\s*['"]green['"]\s*;?/i.test(js);  // Checks if color changes to green
            const eventListener = /\.querySelector\(['"]h2['"]\)\.addEventListener\(['"]click['"]\s*,\s*changeColor\s*\)/i.test(js);  // Checks event listener

            return h2Exists && functionExists && colorChange && eventListener;
        }
    }
    ,


];


let currentLesson = 0;

function updateLesson() {
    const lesson = lessons[currentLesson];
    lessonNumber.textContent = currentLesson + 1;
    lessonTitle.textContent = lesson.title;
    lessonInstruction.innerHTML = lesson.instruction;
    lessonExplanation.innerHTML = lesson.explanation;
    lessonExample.innerHTML = lesson.example;
    updatePreview();
}

function updatePreview() {
    const combinedCode = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Preview</title>
  <style>${cssCode.value}</style>
</head>
<body>
  ${htmlCode.value}
  <script>${jsCode.value}<\/script>
</body>
</html>
  `;
    const iframeDoc = outputFrame.contentDocument || outputFrame.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(combinedCode);
    iframeDoc.close();
}

checkCodeButton.addEventListener('click', () => {
    const lesson = lessons[currentLesson];
    if (lesson.check()) {
        alert('✅ Great job!');

        if (currentLesson < lessons.length - 1) {
            currentLesson++;
            updateLesson();
        } else {
            alert('🎉 You completed all lessons!');
        }
    } else {
        alert('⚠️ Not quite right. Check your code and try again.');
    }
});

htmlCode.addEventListener('input', updatePreview);
cssCode.addEventListener('input', updatePreview);
jsCode.addEventListener('input', updatePreview);

updateLesson();












