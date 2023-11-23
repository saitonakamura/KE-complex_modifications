// JavaScript should be written in ECMAScript 5.1.

function main() {
  console.log(
    JSON.stringify(
      {
        title: 'Personal rules (@saitonakamura)',
        rules: ['left', 'right'].map(function (side) {
          return {
            description: 'Double tap and hold ' + side + '_shift to make it ' + side + '_option',
            manipulators: [
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: side + '_shift pressed', value: 1 }],
                from: { key_code: side + '_shift' },
                to: [{ key_code: side + '_alt', modifiers: [] }],
              },
              {
                type: 'basic',
                from: { key_code: side + '_shift' },
                to: [
                  { set_variable: { name: side + '_shift pressed', value: 1 } },
                  { key_code: side + '_shift' },
                ],
                to_delayed_action: {
                  to_if_invoked: [{ set_variable: { name: side + '_shift pressed', value: 0 } }],
                  to_if_canceled: [{ set_variable: { name: side + '_shift pressed', value: 0 } }],
                },
              },
            ],
          }
        }).concat([
          {
            description: "Caps Lock to ESC on tap/Left control on hold",
            manipulators: [
              {
                type: "basic",
                from: {
                  key_code: "caps_lock",
                  modifiers: {
                    optional: [
                      "any"
                    ]
                  }
                },
                to: [
                  {
                    key_code: "left_control",
                    lazy: true
                  }
                ],
                to_if_alone: [
                  {
                    key_code: "escape"
                  }
                ]
              }
            ]
          },
          {
            description: 'Double tap and hold command to enable vi mode',
            manipulators: [
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'left_command pressed', value: 1 }],
                from: { key_code: 'left_command' },
                to: [
                  { set_variable: { name: 'vi mode', value: 1 } },
                  // { key_code: 'left_shift', modifiers: ['left_control', 'left_alt'] }
                ],
                to_delayed_action: {
                  to_if_invoked: [{ set_variable: { name: 'vi mode', value: 0 } }],
                  to_if_canceled: [{ set_variable: { name: 'vi mode', value: 0 } }],
                },
              },
              {
                type: 'basic',
                from: { key_code: 'left_command' },
                to: [
                  { set_variable: { name: 'left_command pressed', value: 1 } },
                  { key_code: 'left_command' },
                ],
                to_delayed_action: {
                  to_if_invoked: [{ set_variable: { name: 'left_command pressed', value: 0 } }],
                  to_if_canceled: [{ set_variable: { name: 'left_command pressed', value: 0 } }],
                },
              },
            ],
          },
          {
            description: 'vi mode',
            manipulators: [
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'vi mode', value: 1 }],
                from: { key_code: 'h' },
                to: { key_code: 'left_arrow' },
              },
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'vi mode', value: 1 }],
                from: { key_code: 'j' },
                to: { key_code: 'down_arrow' },
              },
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'vi mode', value: 1 }],
                from: { key_code: 'k' },
                to: { key_code: 'up_arrow' },
              },
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'vi mode', value: 1 }],
                from: { key_code: 'l' },
                to: { key_code: 'right_arrow' },
              },
            ]
          },
          {
            description: "Left Shift + Spacebar => Backspace",
            manipulators: [
              {
                type: "basic",
                from: {
                  key_code: "spacebar",
                  modifiers: {
                    "mandatory": [
                      "left_shift"
                    ]
                  }
                },
                to: [
                  {
                    key_code: "delete_or_backspace",
                    lazy: true,
                    repeat: true
                  }
                ]
              }
            ]
          },
          {
            description: "Right Shift + Spacebar => Delete Forward",
            manipulators: [
              {
                type: "basic",
                from: {
                  key_code: "spacebar",
                  modifiers: {
                    mandatory: [
                      "right_shift"
                    ]
                  }
                },
                to: [
                  {
                    key_code: "delete_forward",
                    lazy: true,
                    repeat: true
                  }
                ]
              }
            ]
          }
        ])
      },
      null,
      '  '
    )
  )
}

main()
