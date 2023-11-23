// JavaScript should be written in ECMAScript 5.1.

function main() {
  console.log(
    JSON.stringify(
      {
        title: 'Personal rules (@saitonakamura)',
        rules: ['left', 'right'].map(function(side) {
          return {
            description: 'Double tap and hold ' + side + '_shift to make it ' + side + '_option',
            manipulators: [
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: side + '_shift_pressed', value: 1 }],
                from: { key_code: side + '_shift' },
                to: [{ key_code: side + '_alt', modifiers: [] }],
              },
              {
                type: 'basic',
                from: { key_code: side + '_shift' },
                to: [{ key_code: side + '_shift' }],
                to_if_alone: [{ set_variable: { name: side + '_shift_pressed', value: 1 } }],
                to_if_held_down: [{ set_variable: { name: side + '_shift_pressed', value: 1 } }],
                to_delayed_action: {
                  to_if_invoked: [{ set_variable: { name: side + '_shift_pressed', value: 0 } }],
                  to_if_canceled: [{ set_variable: { name: side + '_shift_pressed', value: 0 } }],
                }
              }
            ]
          }
        })
      },
      null,
      '  '
    )
  )
}

main()
