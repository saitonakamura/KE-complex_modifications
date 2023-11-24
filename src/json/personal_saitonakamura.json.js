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
            description: "Hold tab to Hyper",
            manipulators: [
              {
                type: "basic",
                from: {
                  key_code: "tab",
                },
                to: [
                  {
                    key_code: "left_shift",
                    modifiers: ["left_control", "left_alt", "left_command"],
                    lazy: true
                  }
                ],
                to_if_alone: [
                  {
                    key_code: "tab"
                  }
                ]
              }
            ]
          },
          {
            description: 'Quotes key to Enter',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'quote', modifiers: { optional: 'any' } },
                to: [{ key_code: 'return_or_enter' }],
              }
            ]
          },
          {
            description: 'Double tap and hold left command for MEH',
            manipulators: [
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'left_command pressed', value: 1 }],
                from: { key_code: 'left_command' },
                to: [
                  { key_code: 'left_shift', modifiers: ['left_control', 'left_alt'] }
                ],
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
            description: 'Double tap and hold right command for MEH',
            manipulators: [
              {
                type: 'basic',
                conditions: [{ type: 'variable_if', name: 'right_command pressed', value: 1 }],
                from: { key_code: 'right_command' },
                to: [
                  { key_code: 'left_shift', modifiers: ['left_control', 'left_alt'] }
                ],
              },
              {
                type: 'basic',
                from: { key_code: 'right_command' },
                to: [
                  { set_variable: { name: 'right_command pressed', value: 1 } },
                  { key_code: 'right_command' },
                ],
                to_delayed_action: {
                  to_if_invoked: [{ set_variable: { name: 'right_command pressed', value: 0 } }],
                  to_if_canceled: [{ set_variable: { name: 'right_command pressed', value: 0 } }],
                },
              },
            ],
          },
          {
            description: 'vi mode w/ MEH',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'h', modifiers: { mandatory: ['left_shift', 'left_control', 'left_alt'] } },
                to: { key_code: 'left_arrow' },
              },
              {
                type: 'basic',
                from: { key_code: 'j', modifiers: { mandatory: ['left_shift', 'left_control', 'left_alt'] } },
                to: { key_code: 'down_arrow' },
              },
              {
                type: 'basic',
                from: { key_code: 'k', modifiers: { mandatory: ['left_shift', 'left_control', 'left_alt'] } },
                to: { key_code: 'up_arrow' },
              },
              {
                type: 'basic',
                from: { key_code: 'l', modifiers: { mandatory: ['left_shift', 'left_control', 'left_alt'] } },
                to: { key_code: 'right_arrow' },
              },
              {
                type: 'basic',
                from: { key_code: 'w', modifiers: { mandatory: ['left_shift', 'left_control', 'left_alt'] } },
                to: { key_code: 's', modifiers: ['left_command'] },
              },
              {
                type: 'basic',
                from: { key_code: 'u', modifiers: { mandatory: ['left_shift', 'left_control', 'left_alt'] } },
                to: { key_code: 'z', modifiers: ['left_command'] },
              },
              {
                type: 'basic',
                from: { key_code: 'r', modifiers: { mandatory: ['left_shift', 'left_control', 'left_alt'] } },
                to: { key_code: 'z', modifiers: ['left_shift', 'left_command'] },
              },
              {
                type: 'basic',
                from: { key_code: 'y', modifiers: { mandatory: ['left_shift', 'left_control', 'left_alt'] } },
                to: { key_code: 'c', modifiers: ['left_command'] },
              },
              {
                type: 'basic',
                from: { key_code: 'p', modifiers: { mandatory: ['left_shift', 'left_control', 'left_alt'] } },
                to: { key_code: 'v', modifiers: ['left_command'] },
              },
              {
                type: 'basic',
                from: { key_code: 'd', modifiers: { mandatory: ['left_shift', 'left_control', 'left_alt'] } },
                to: { key_code: 'x', modifiers: ['left_command'] },
              },
              {
                type: 'basic',
                from: { key_code: 'b', modifiers: { mandatory: ['left_shift', 'left_control', 'left_alt'] } },
                to: { key_code: 'left_arrow', modifiers: ['left_alt'] },
              },
              {
                type: 'basic',
                from: { key_code: 'e', modifiers: { mandatory: ['left_shift', 'left_control', 'left_alt'] } },
                to: { key_code: 'right_arrow', modifiers: ['left_alt'] },
              },
              {
                type: 'basic',
                from: { key_code: 'slash', modifiers: { mandatory: ['left_shift', 'left_control', 'left_alt'] } },
                to: { key_code: 'f', modifiers: ['left_command'] },
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
